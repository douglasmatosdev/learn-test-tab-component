import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './Tabs.module.css';

import { slugfy } from '../../utils/slugfy';

const Tabs = ({ children, initialTab }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);
    const router = useRouter();

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();

        setActiveTab(slugfy(newActiveTab));
    }

    useEffect(() => {
        if (initialTab.tab) {
            setActiveTab(initialTab.tab);
            console.log(initialTab)
        }
    }, [])

    useEffect(() => {
        router.push(
            `${router.pathname}?tab=${slugfy(activeTab)}`,
            undefined,
            { shallow: true }
        );
        console.log(activeTab)
    }, [activeTab])

    return (
        <div>
            <ul className={styles.tabs}>
                {children.map((tab, i) => {
                    const label = tab.props.label;
                    return (
                        <li
                            key={i * 2}
                            className={slugfy(label) == activeTab ? styles.current : ''}
                        >
                            <a onClick={e => handleClick(e, label)} href="#">{label}</a>
                        </li>
                    )
                })}
            </ul>
            {children.map((one, i) => {
                if (slugfy(one.props.label) == activeTab) {
                    return (
                        <div key={i} className={styles.content}>
                            {one}
                        </div>
                    )
                }
            })}
        </div>
    )
}

export { Tabs }
