import React from 'react';
const Preview = ({ show, imageProject, hidden }) => {
    const showPreview = show ? "preview show-times" : "modal hidden-times";

    return (
        <section className={showPreview}>
            <section className="preview-main">
                <div className="button-closemodal">
                    <button className="btn-close " onClick={hidden}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="content-img">
                    <img src={imageProject} alt="" className="img-preview" />
                </div>
            </section>
        </section>

    );
};
export default Preview;