import { NavLink } from 'react-router-dom';
import DashboardSVG from "../assets/svg/DashboardSVG.jsx";
import KeySVG from "../assets/svg/Key.jsx";
import ProductSquareSVG from "../assets/svg/ProductSquare.jsx";
import ArrowRightSVG from "../assets/svg/ArrowRight.jsx";
import CustomerSVG from "../assets/svg/Customer.jsx";
import DiscountSVG from "../assets/svg/Discount.jsx";
import WalletSVG from "../assets/svg/Wallet.jsx";
import MessageSVG from "../assets/svg/Message.jsx";
import PMPhoto from "../assets/png/PMPhoto.png";
import './index.css';
import {isMobile} from "../constants.jsx";

const Sidebar = () => (
    <div className='sidebarContainer'>
        <div className='dashboardLogo'>
            <DashboardSVG />
            <div className='versionElement'>v.01</div>
        </div>
        <div className="sidebar">
            <NavLink to="/" className={({ isActive }) => isActive ? 'sideLinkComponent active' : 'sideLinkComponent'}>
                {({ isActive }) => (
                    <>
                        <div className='linkComponent'>
                            <KeySVG isActive={isActive} className='svgIcon' />{!isMobile && <span className='sideLink'>Dashboard</span>}
                        </div>
                        {!isMobile && <ArrowRightSVG isActive={isActive} className='arrowIcon' />}
                    </>
                )}
            </NavLink>
            <NavLink to="/product" className={({ isActive }) => isActive ? 'sideLinkComponent active' : 'sideLinkComponent'}>
                {({ isActive }) => (
                    <>
                        <div className='linkComponent'>
                            <ProductSquareSVG isActive={isActive} className='svgIcon' />{!isMobile && <span className='sideLink'>Product</span>}
                        </div>
                        {!isMobile && <ArrowRightSVG isActive={isActive} className='arrowIcon' />}
                    </>
                )}
            </NavLink>
            <NavLink to="/customers" className={({ isActive }) => isActive ? 'sideLinkComponent active' : 'sideLinkComponent'}>
                {({ isActive }) => (
                    <>
                        <div className='linkComponent'>
                            <CustomerSVG isActive={isActive} className='svgIcon' />{!isMobile && <span className='sideLink'>Customers</span>}
                        </div>
                        {!isMobile && <ArrowRightSVG isActive={isActive} className='arrowIcon' />}
                    </>
                )}
            </NavLink>
            <NavLink to="/income" className={({ isActive }) => isActive ? 'sideLinkComponent active' : 'sideLinkComponent'}>
                {({ isActive }) => (
                    <>
                        <div className='linkComponent'>
                            <WalletSVG isActive={isActive} className='svgIcon' />{!isMobile && <span className='sideLink'>Income</span>}
                        </div>
                        {!isMobile && <ArrowRightSVG isActive={isActive} className='arrowIcon' />}
                    </>
                )}
            </NavLink>
            <NavLink to="/promote" className={({ isActive }) => isActive ? 'sideLinkComponent active' : 'sideLinkComponent'}>
                {({ isActive }) => (
                    <>
                        <div className='linkComponent'>
                            <DiscountSVG isActive={isActive} className='svgIcon' />{!isMobile && <span className='sideLink'>Promote</span>}
                        </div>
                        {!isMobile && <ArrowRightSVG isActive={isActive} className='arrowIcon' />}
                    </>
                )}
            </NavLink>
            <NavLink to="/help" className={({ isActive }) => isActive ? 'sideLinkComponent active' : 'sideLinkComponent'}>
                {({ isActive }) => (
                    <>
                        <div className='linkComponent'>
                            <MessageSVG isActive={isActive} className='svgIcon' />{!isMobile && <span className='sideLink'>Help</span>}
                        </div>
                        {!isMobile && <ArrowRightSVG isActive={isActive} className='arrowIcon' />}
                    </>
                )}
            </NavLink>
        </div>
        <div className='pmBlock'>
            <img src={PMPhoto} alt="Photo" className='pmPhotoStyles'/>
            <div>
                <div>Evano</div>
                <div className='descrPM'>Project Manager</div>
            </div>
        </div>
    </div>
);

export default Sidebar;
