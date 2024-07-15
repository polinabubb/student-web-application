import styles from './Avatar.module.css';
import cn from "classnames";

type AvatarProps = {
    src: string;
}

export function Avatar({src}: AvatarProps): JSX.Element {
    return (
        <span className={cn(
            styles.circleAvatar,
            styles['circle-avatar'],
        )}>
            <img alt="avatar" src={src} className={styles.avatar}/>
        </span>
    );
}

export default Avatar;