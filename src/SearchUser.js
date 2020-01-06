import React, {useState, useContext, Consumer} from "react";
import { RepoContext } from "./RepoContext.js";

export const SearchUser = () => {

const [username, setUsername] = useState("");

const {repos, setRepos, updateRepos} = useContext(RepoContext);

// const updateRepos = useContext(RepoContext);

    const updateUsername = (e) => {
        setUsername(e.target.value) // to get the value from the input
    }

    return (
        <div className="search-form">
            <h3>Enter username:</h3>

            <p>{username}</p>

            {/* <form> */}
                <input type="text" onChange={updateUsername}  />
                <button onClick={() => updateRepos(username)}>Submit</button>
                    {repos && repos.length>0 && repos.map((repo) => (
                    <li>{repo.name}</li>
                ))}
            {/* </form> */}
            
        </div>
    );
};