"use client"
import { useActionState } from "react";
import classes from "./news-form.module.css";
import { FormSubmission } from "../FormSubmission/form-submission";
import { CreateNewsAction } from "@/types/news";

export default function NewsForm({ action }: CreateNewsAction) { 
    const [state, formAction] = useActionState(action, {});

    return (
        <>
            <h1>Create a news</h1>
            <form action={formAction}>
                <p className={classes.formControl}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" />
                </p>
                <p className={classes.formControl}>
                    <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        id="image"
                        name="image"
                    />
                </p>
                <p className={classes.formControl}>
                    <label htmlFor="content">Content</label>
                    <textarea id="content" name="content" rows={5} />
                </p>
                {state.errors && <ul className={classes.formErrors}>
                        {state.errors.map((error: string, idx: number) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>}
                <div className={classes.formActions}>
                    <FormSubmission />
                </div>
            </form>
        </>
    )
}