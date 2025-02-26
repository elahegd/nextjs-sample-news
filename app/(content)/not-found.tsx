import classes from './content.module.css';

export default function NotFoundPage() {
    return (
        <div className={classes.error}>
            <h1> News Not found!</h1>
            <p>Unfortunately, we couldn't find article for you!</p>
        </div>
    )
}