import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import './App.css';
import HomeSection from './sections/home.section';
import RequestSection from './sections/request.section';
import SaveSection from './sections/save.section';
import WhySection from './sections/why.section';
import TestimonialSection from './sections/testimonials.section';

function App() {
    return (
        <>
            <Header />
            <HomeSection />
            <RequestSection />
            <SaveSection />
            <WhySection />
            <TestimonialSection />
            <Footer />
        </>
    );
}

export default App;
