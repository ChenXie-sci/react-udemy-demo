import React, {useState, useEffect} from "react";
import countriesList from "./countries";

function Account() {
    const [view, setView] = useState("numview");

    return(
        <div className="oauth-view rel">
            <h1 className="s18 fontb"> Sign in</h1>
            <h1 className="s15 fontb">Enter your phone number, we will send you a veridation code</h1>

            <select>
                {
                   countriesList.map(e => {
                      return (
                          <option value={e.dial_code.}
                      )
                   })
                }
            </select>
        </div>
    )
}