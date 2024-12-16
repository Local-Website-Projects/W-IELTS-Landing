import React from "react";

function Preloader({ loading }) {
    return (
        <div style={{ display: loading ? "block" : "none" }}>
            <div id="preloader">
                <div id="loader" className="loader">
                    <div className="loader-container">
                        <div className="loader-icon"><img src="assets/img/logo/preloader.png" alt="preloader"/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Preloader;
