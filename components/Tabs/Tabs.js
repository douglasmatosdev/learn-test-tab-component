import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from "prop-types";
import styles from './Tabs.module.css';

import { slugfy } from '../../utils/slugfy';

const Tabs = ({ children, initialTab }) => {
    const [activeTab, setActiveTab] = useState(slugfy(children[0].props.label));
    const router = useRouter();

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();

        setActiveTab(slugfy(newActiveTab));
    }

    useEffect(() => {
        if (initialTab.tab) {
            setActiveTab(initialTab.tab);
        }
    }, [])

    useEffect(() => {
        router.push(
            `${router.pathname}?tab=${slugfy(activeTab)}`,
            undefined,
            { shallow: true }
        );
    }, [activeTab])

    return (
        <div>
            <ul className={styles.tabs}>
                {children.map((tab, i) => {
                    const label = tab.props.label;
                    return (
                        <li
                            data-testid={slugfy(label)}
                            className={slugfy(label) == activeTab ? styles.current : ''}
                            key={i * 2}
                        >
                            <a onClick={e => handleClick(e, label)} href="#">
                                {label}
                            </a>
                        </li>
                    )
                })}
            </ul>
            {children.map((one, i) => {
                if (slugfy(one.props.label) == activeTab) {
                    return (
                        <div
                            data-testid="content"
                            key={i}
                            className={styles.content}
                        >
                            {one}
                        </div>
                    )
                }
            })}
        </div>
    )
}

Tabs.propTypes = {
    initialTab: PropTypes.object, // {tab: 'tab-3'}
    children: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            children: PropTypes.any
        })
    ).isRequired
}


Tabs.defaultProps = {
    initialTab: {}
}
export { Tabs }
