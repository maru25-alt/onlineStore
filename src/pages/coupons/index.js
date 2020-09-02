import React, { Component } from 'react'
import PageHeader from '../../otherComponents/PageHeader';
import { Navigation } from 'components/Navbars/navigation/Navigation';
import Footer from '../../components/Footer/MainFooter';
export class index extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <PageHeader title="Products on Promotion" subtitle="Promotions" link="/coupons"/>
                Coupons

                <Footer/>
            </div>
        )
    }
}

export default index
