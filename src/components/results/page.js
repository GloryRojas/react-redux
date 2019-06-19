import React, { Fragment } from 'react';
import CssBaseLine from "@material-ui/core/CssBaseline";
import AppBar from "../appBar";
import { Typography } from '@material-ui/core';
import './styles.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const Page = (props) => {
    const {
        results,
        goTo
    } = props;

    const isEmpty = results.length === 0;

    return (
        <Fragment>
            <CssBaseLine />
            <AppBar />
            <div className="results-page">
                { isEmpty ?
                    <Typography variant="h5" component="h3" className="page-message">
                        There are no results
                    </Typography>
                    : 
                    results.map(item => 
                        <div key={item.id} className="card-container">
                            <Card className="card" onClick={()=> goTo(`/details/${item.id}`)}>
                                <CardActionArea>
                                    <CardMedia className="card-media" image={item.image} title={item.title}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {item.title}
                                            </Typography>
                                            <Typography component="p">
                                                {item.content}
                                            </Typography>
                                        </CardContent>
                                    </CardMedia> 
                                </CardActionArea>
                            </Card>
                                             
                        </div>)
                }
            </div>
        </Fragment>
    );
}

export default Page;