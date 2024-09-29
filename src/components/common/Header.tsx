import { IconBrandLayers } from "justd-icons";
import Container from "./Container";
import { Constant } from "../../utils/constant";

const Header = () => {
    return (
       <>
	   	<Container>
            <div className="animate-fade-right text-xl font-bold flex items-center gap-3">
                <div className="border border-gray-800 rounded-full">
                    <IconBrandLayers className="m-2"/> 
                </div>
                <div>
                    <h1 className="text-2xl">
                        {Constant.title}
                    </h1>
                </div>
            </div>
            <div className="my-8 animate-fade-up animate-delay-700">
                <p>
                    <span className="font-newsreader italic font-extrabold">Crafting interfaces. </span>Building polished software and web experiences.
                    Experimenting with magical details in user interfaces.  Webmaster at <span className="underlines">Basement</span>.
                </p>

                <div className="mt-10">
                    <h1 className="font-bold text-xl">
                        Now
                    </h1>
                    <p className="mt-5">
                        Developing skill through doing, guiltlessly exploring passion and interests, imbuing quality. Mindful that  <span className="font-newsreader italic font-extrabold">everything around me is someone’s life work</span>.
                        <br />
                        <br />
                        All I want to do is build websites. 
                        <br />
                        Typography, motion design, copywriting, performance—the web is an endless medium of opportunity and creativity of which I’ve only scratched the surface.
                        <br />
                        <br />
                        Enjoying deep, dark, boring dance music: songs that set the pace in the first ten seconds and maintain it for the next ten minutes. <span className="underlines">Deep</span> is a curation of my favorites. Soothed by the inherent energy of drum and bass—<span className="underlines">Drum</span> has my favorites.
                    </p>
                </div>
            </div>
        </Container>
	   </>
    );
};

export default Header;
