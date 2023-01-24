import React from "react";

interface ShowBarProps {
    // jsx child
    children: React.ReactNode;
    isCol?: boolean;
}

export default function ShowBar({ children,isCol=false }: ShowBarProps) {
    return (
        <div className={`${isCol?'tw-flex-col':''} tw-w-full tw-mt-2 tw-flex tw-flex-wrap tw-gap-2 tw-justify-start tw-items-center tw-rounded-md  tw-p-10 tw-bg-gray-100 dark:tw-bg-gray-900`}>
            {children}
        </div>
    )
}