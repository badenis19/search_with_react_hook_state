import React, { createContext, useState } from "react";

export const RepoContext = createContext();

export const RepoProvider = (props) => {

    // inside the useState bracket always define the data type (e.g. array)
    const [repos, setRepos] = useState([]);
    
    
    const FetchRepo = async (username) => {
        let res = await fetch(`https://api.github.com/users/${username}/repos`)
        let data = await res.json();
        return data;
    }
    
    const updateRepos = (username) => {
        console.log("TEST")
        const myPromise = FetchRepo(username);
        // setRepos(FetchRepo()); // trying to store in info return to then iterate over it
            myPromise.then( data => {
                setRepos(data)
            })
    }

    return (
        < RepoContext.Provider value={{repos, setRepos, updateRepos}}>
            {props.children}
        </RepoContext.Provider>
    );

};




    

