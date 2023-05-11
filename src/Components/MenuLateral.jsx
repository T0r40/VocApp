import React from 'react';
import { useTranslation } from "react-i18next";
import ES from "../img/espana.png";
import UK from "../img/reino-unido.png";
import FR from "../img/francia.png";
import AL from "../img/alemania.png";

function MenuLateral() {
    const [t, i18n] = useTranslation('common');
return (
<div className="menu-lateral">
    <ul>
        <li>
            <button onClick={() => i18n.changeLanguage('en')}>
                <img src={UK} width="20"/>
            </button>
        </li>
        <li>
            <button onClick={() => i18n.changeLanguage('al')}>
                    <img src={AL} width="20"/>
            </button>
        </li>
        <li>
            <button onClick={() => i18n.changeLanguage('fr')}>
                <img src={FR} width="20"/>
            </button>
        </li>
        <li>
            <button onClick={() => i18n.changeLanguage('es')}>
                <img src={ES} width="20"/>
            </button>
        </li>
    </ul>
</div>
);
}

export default MenuLateral;
