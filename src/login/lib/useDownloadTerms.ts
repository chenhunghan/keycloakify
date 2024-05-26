import { useEffect } from "react";
import { memoize } from "keycloakify/tools/memoize";
import { fallbackLanguageTag } from "keycloakify/login/i18n/i18n";
import { useConst } from "keycloakify/tools/useConst";
import { useConstCallback } from "keycloakify/tools/useConstCallback";
import { assert } from "tsafe/assert";
import {
    createStatefulObservable,
    useRerenderOnChange
} from "keycloakify/tools/StatefulObservable";
import { KcContext } from "../kcContext";

const obsTermsMarkdown = createStatefulObservable<string | undefined>(() => undefined);

export type KcContextLike = {
    pageId: string;
    locale?: {
        currentLanguageTag: string;
    };
    termsAcceptanceRequired?: boolean;
};

assert<KcContext extends KcContextLike ? true : false>();

/** Allow to avoid bundling the terms and download it on demand*/
export function useDownloadTerms(params: {
    kcContext: KcContextLike;
    downloadTermMarkdown: (params: { currentLanguageTag: string }) => Promise<string>;
}) {
    const { kcContext } = params;

    const { downloadTermMarkdownMemoized } = (function useClosure() {
        const { downloadTermMarkdown } = params;

        const downloadTermMarkdownConst = useConstCallback(downloadTermMarkdown);

        const downloadTermMarkdownMemoized = useConst(() =>
            memoize((currentLanguageTag: string) =>
                downloadTermMarkdownConst({ currentLanguageTag })
            )
        );

        return { downloadTermMarkdownMemoized };
    })();

    useEffect(() => {
        if (kcContext.pageId === "terms.ftl" || kcContext.termsAcceptanceRequired) {
            downloadTermMarkdownMemoized(
                kcContext.locale?.currentLanguageTag ?? fallbackLanguageTag
            ).then(thermMarkdown => (obsTermsMarkdown.current = thermMarkdown));
        }
    }, []);
}

export function useTermsMarkdown() {
    useRerenderOnChange(obsTermsMarkdown);

    const termsMarkdown = obsTermsMarkdown.current;

    return { termsMarkdown };
}
