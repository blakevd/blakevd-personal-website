import { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
    repos: any[];
}

// Handles the data we get from 
const Projects = (props: Props) => {
    var list;
    // handle data if it is an array and not empty
    if(Array.isArray(props.repos) && Object.keys(props.repos).length > 0) {
        list = props.repos.map((repo: any) => {
            return (
                <li key={repo.id}>
                    <div className='single-proj'>
                        <a href={repo.html_url} target='_blank'><h2>{repo.name}</h2></a>
                        <p>{repo.description != null? repo.description: "No Description Found"}</p>
                    </div>
                </li>
            )
        })
    }
    else {
        list = <li>No Repositories Found</li>
    }
    
    // return as a list format
    return (
        <div className = "page-overlay projects">
            <h1>Projects</h1>
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}></motion.div>
            <ul>{list}</ul>
        </div>
    )
}

export default Projects;