import { useState } from 'react';

interface Props {
    repos: any[];
}

// Handles the data we get from 
const Projects = (props: Props) => {
    var list;
    if(Array.isArray(props.repos) && Object.keys(props.repos).length > 0) {
        list = props.repos.map((repo: any) => {
            return (
                <li key={repo.id}>
                    <a href={repo.html_url}>{repo.name}</a>
                </li>
            )
        })
    }
    else {
        list = <li>No Repositories Found</li>
    }
    
    return (
        <div className = "page-overlay projects">
            <h1>Projects here</h1>
            <ul>{list}</ul>
        </div>
    )
}

export default Projects;