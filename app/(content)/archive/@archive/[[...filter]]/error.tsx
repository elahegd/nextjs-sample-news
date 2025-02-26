'use client'

interface FilterErrorPageProps {
   error?: { message: string } ;
}

export default function FilterErrorPage({ error }: FilterErrorPageProps) {
    return (
        <>
            <h2>Error happened</h2>
            <p>{error?.message}</p>
        </>
    )
}