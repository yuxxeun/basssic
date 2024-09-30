import { IconBrandLayers } from "justd-icons";
import Container from "./Container";
import { Constant } from "../../utils/constant";

const Header = () => {
    return (
       <>
	   	<Container>
            <div className="animate-fade-right flex items-center gap-3">
                <div className="border border-[#2e2e2e] rounded-full">
                    <IconBrandLayers className="m-2"/> 
                </div>
                <div>
                    <h1 className="text-2xl font-bold font-newsreader">
                        {Constant.title}
                    </h1>
                </div>
            </div>
            <div className="mt-8 mb-24 animate-fade-up animate-delay-700">
                <p>
                    <span className="font-newsreaderItalic font-semibold">Crafting interfaces. </span>Building polished software and web experiences.
                    Experimenting with magical details in user interfaces.  Webmaster at <span className="underlines">Basement</span>.
                </p>

                <div className="my-16">
                    <h1 className="font-bold text-lg font-sans">
                        Now
                    </h1>
                    <p className="mt-5">
                        Developing skill through doing, guiltlessly exploring passion and interests, imbuing quality. 
                        Mindful that  <span className="font-newsreaderItalic font-semibold">everything around me is someone’s life work</span>.
                        <br />
                        <br />
                        All I want to do is build websites. 
                        Typography, motion design, copywriting, performance—the web is an endless medium of opportunity and creativity of which I’ve only scratched the surface.
                        <br />
                        <br />
                        Enjoying deep, dark, boring dance music: songs that set the pace in the first ten seconds and maintain it for the next ten minutes. <span className="underlines">Deep</span> is a curation of my favorites. Soothed by the inherent energy of drum and bass—<span className="underlines">Drum</span> has my favorites.
                    </p>
                </div>

                <div>
                    <h1 className="font-bold text-lg font-sans">
                        Connect
                    </h1>
                    <p className="mt-5">
                        Reach me at <a href="https://twitter.com/yuxxeun" className="underlines">@yuxxeun</a>  on internet.
                    </p>
                </div>
            </div>

        </Container>
	   </>
    );
};

export default Header;
