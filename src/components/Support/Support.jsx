import React from "react";
import './Support.css'

function Support() {
    return (
        <>
            <div className="container support">
                <div className="box kb-support">
                    <h4>KB Support</h4>
                    <div className="img-box">
                        <img src="images/support.png" alt="support image" />
                    </div>
                    <button type="button" className="btn btn-primary download-btn">Download</button>
                </div>
                <div className="box reports">
                    <h4>Crystal Reports</h4>
                    <div className="img-box">
                        <img src="images/crystal.png" alt="report image" />
                    </div>
                    <button type="button" className="btn btn-primary download-btn">Download</button>
                </div>
                <div className="box anyDesk">
                    <h4>Anydesk</h4>
                    <div className="img-box">
                        <img src="images/anydesk.png" alt="anydesk image" />
                    </div>
                    <button type="button" className="btn btn-primary download-btn">Download</button>
                </div>
                <div className="box teamViewer">
                    <h4>Team Viewer</h4>
                    <div className="img-box">
                        <img src="images/team-viewer.png" alt="team viewer logo" />
                    </div>
                    <button type="button" className="btn btn-primary download-btn">Download</button>
                </div>
            </div>
        </>
    )
}

export default Support;
