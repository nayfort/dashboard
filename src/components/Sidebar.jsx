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

const Sidebar = () => (
    <div className='sidebarContainer'>
        <div className='dashboardLogo'>
            <DashboardSVG />
            <div className='versionElement'>v.01</div>
        </div>
        <nav className="sidebar" aria-label="Main navigation">
            <NavLink aria-label="Dashboard" to="/" className={({ isActive }) => isActive ? 'sideLinkComponent active' : 'sideLinkComponent'}>
                {({ isActive }) => (
                    <>
                        <div className='linkComponent'>
                            <KeySVG isActive={isActive} className='svgIcon' /><span className='sideLink'>Dashboard</span>
                        </div>
                        <span className="arrowIcon"><ArrowRightSVG isActive={isActive} /></span>
                    </>
                )}
            </NavLink>
            <NavLink aria-label="Product" to="/product" className={({ isActive }) => isActive ? 'sideLinkComponent active' : 'sideLinkComponent'}>
                {({ isActive }) => (
                    <>
                        <div className='linkComponent'>
                            <ProductSquareSVG isActive={isActive} className='svgIcon' /><span className='sideLink'>Product</span>
                        </div>
                        <span className="arrowIcon"><ArrowRightSVG isActive={isActive} /></span>
                    </>
                )}
            </NavLink>
            <NavLink aria-label="Customers" to="/customers" className={({ isActive }) => isActive ? 'sideLinkComponent active' : 'sideLinkComponent'}>
                {({ isActive }) => (
                    <>
                        <div className='linkComponent'>
                            <CustomerSVG isActive={isActive} className='svgIcon' /><span className='sideLink'>Customers</span>
                        </div>
                        <span className="arrowIcon"><ArrowRightSVG isActive={isActive} /></span>
                    </>
                )}
            </NavLink>
            <NavLink aria-label="Income" to="/income" className={({ isActive }) => isActive ? 'sideLinkComponent active' : 'sideLinkComponent'}>
                {({ isActive }) => (
                    <>
                        <div className='linkComponent'>
                            <WalletSVG isActive={isActive} className='svgIcon' /><span className='sideLink'>Income</span>
                        </div>
                        <span className="arrowIcon"><ArrowRightSVG isActive={isActive} /></span>
                    </>
                )}
            </NavLink>
            <NavLink aria-label="Promote" to="/promote" className={({ isActive }) => isActive ? 'sideLinkComponent active' : 'sideLinkComponent'}>
                {({ isActive }) => (
                    <>
                        <div className='linkComponent'>
                            <DiscountSVG isActive={isActive} className='svgIcon' /><span className='sideLink'>Promote</span>
                        </div>
                        <span className="arrowIcon"><ArrowRightSVG isActive={isActive} /></span>
                    </>
                )}
            </NavLink>
            <NavLink aria-label="Help" to="/help" className={({ isActive }) => isActive ? 'sideLinkComponent active' : 'sideLinkComponent'}>
                {({ isActive }) => (
                    <>
                        <div className='linkComponent'>
                            <MessageSVG isActive={isActive} className='svgIcon' /><span className='sideLink'>Help</span>
                        </div>
                        <span className="arrowIcon"><ArrowRightSVG isActive={isActive} /></span>
                    </>
                )}
            </NavLink>
        </nav>
        <div className='pmBlock'>
            <img src={PMPhoto} alt="Evano" className='pmPhotoStyles'/>
            <div>
                <div>Evano</div>
                <div className='descrPM'>Project Manager</div>
            </div>
        </div>
    </div>
);

export default Sidebar;
