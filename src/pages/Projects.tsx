import { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
    repos: any[];
    index: number;
}

// Handles the data we get from 
const Projects = (props: Props) => {
    var list;
    // handle data if it is an array and not empty
    if(Array.isArray(props.repos) && Object.keys(props.repos).length > 0) {
        list = props.repos.map((repo: any, index:number) => {
            return (
                <motion.li  
                key={repo.id}
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}>
                    <div className='single-proj'>
                        <a href={repo.html_url} target='_blank'><h2>{repo.name}</h2></a>
                        <p>{repo.description != null? repo.description: "No Description Found"}</p>
                    </div>
                </motion.li>
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
            <motion.ul
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                    {list}
            </motion.ul>
        </div>
    )
}

export default Projects;