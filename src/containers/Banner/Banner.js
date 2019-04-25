import React, { Component } from 'react';
import styles from './Banner.module.css';
import BrandImage from './../TopMenu/images/brand.svg';


class Banner extends Component {
    state = {  }
    
    componentDidMount() {
        document.body.className=styles.bodyclass
    }
    componentWillUnmount(){
        document.body.className=null
    }
    render() { 
        return ( <React.Fragment>
            <article className={'container ' + styles['banner-article']} >
            <h2 className={styles.center}>Welcome to Avrit</h2>
            <img src={BrandImage} className={styles.imgcenter + " " + styles.imgpadding} alt="ReAudito" />
            </article>
            
            </React.Fragment> );
    }
}
 
export default Banner;

