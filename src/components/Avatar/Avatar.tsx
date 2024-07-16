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
            <img alt="avatar" src={src} loading="lazy" className={styles.avatar} width="40" height="40"/>
        </span>
    );
}

export default Avatar;