import React, {useState} from "react";
import "./popup.css";

const PopupUser = (props) => {
    const {open, close, unregister, header} = props;
    
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
                            취소
                        </button>
                        <button className="unRegi" onClick={unregister}>
                            탈퇴
                        </button>
                    </footer>
                </section>
            ) :null}
        </div>
    )
}

export default PopupUser