import React, { createContext, useState } from "react";

export const RepoContext = createContext();

export const RepoProvider = (props) => {

    // inside the useState bracket always define the data type (e.g. array)
    const [repos, setRepos] = useState([]);
    
    // API call
    const FetchRepo = async (username) => {
        let res = await fetch(`https://api.github.com/users/${username}/repos`)
        let data = await res.json();
        return data;
    }
    
    // storing data from API in state to then iterate over it
    const updateRepos = (username) => {
        // console.log("TEST")
        const myPromise = FetchRepo(username);
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




    

