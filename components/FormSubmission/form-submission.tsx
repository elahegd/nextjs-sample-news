"use client"

import { useFormStatus } from "react-dom";

export function FormSubmission() {
    const status = useFormStatus();

    if (status.pending) {
        return <div><p>Creating news...</p></div>;
    }

    return (
        <>
            <button type="reset">Reset</button>
            <button>Create Post</button>
        </>
    )
}