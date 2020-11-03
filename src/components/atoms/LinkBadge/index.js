import React from 'react';
import './link-badge.scss';

const LinkBadge = ({color, textColor, link, path, ...rest}) => {
    const renderLink = () => {

        const badgeColor = color ? "flex rounded-full bg-" + (color) + "-500 uppercase " + (textColor) + " px-3 py-1 text-xs font-bold mr-3 " + { ...rest } : "" ;

        if (link) {
            return <a href={path} className={ badgeColor }>lorem ipsum dolor</a>
        }

        return <span className={ badgeColor }>lorem ipsum dolor</span>

    }

    return(
        <>
            <div className="flex">
                {renderLink()}
            </div>
        </>
    )
}

export default LinkBadge;