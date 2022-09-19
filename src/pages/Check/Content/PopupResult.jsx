import React, {useState} from "react";
import "../../Info/Content/popup.css"

const PopupResult = (props) => {
    const {open, close, header} = props;
    
    return (
        <div className={open ? 'openPopup popup' : 'popup'}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        <button className="close" onClick={close}>
                            확인
                        </button>
                    </footer>
                </section>
            ) :null}
        </div>
    )
}

export default PopupResult