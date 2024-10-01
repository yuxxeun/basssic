import { IconBrandJustd, IconBrandReactjs, IconLoader2 } from "justd-icons";
import Container from "./Container";
import { Constant } from "../../utils/constant";

const Header = () => {
    return (
       <>
	   	<Container>
            <div className="animate-fade-right flex items-center gap-3">
                <div className="border border-[#2e2e2e] rounded-lg">
                    <IconBrandJustd className="w-5 h-5 m-2"/> 
                </div>
                <div>
                    <h1 className="text-xl tracking-wider font-semibold">
                        {Constant.title}
                    </h1>
                </div>
            </div>
            <div className="mt-8 mb-24 animate-fade-up animate-delay-700">
                <p>
                    <span className="font-newsreaderItalic tracking-wide font-semibold">Crafting interfaces. </span>
                    Building polished software and web experiences.
                    Experimenting with magical details in user interfaces. 
                    Webmaster at <span className="underlines">Basement</span>.
                </p>

                <div className="my-16">
                    <div className="flex gap-3 items-center">
                            <h1 className=" font-bold text-lg">
                                Now
                            </h1>
                            <div className="underlines mt-0.5 h-0.5 w-full" />
                            <IconLoader2 className="w-5 animate-spin"/>
                    </div>
                    <p className="mt-5">
                        Developing skill through doing, guiltlessly exploring passion and interests, imbuing quality. 
                        Mindful that  <span className="tracking-wide font-newsreaderItalic font-semibold">everything around me is someone’s life work</span>.
                        <br />
                        <br />
                        All I want to do is build websites. 
                        Typography, motion design, copywriting, performance—the web is an endless medium of opportunity and creativity of which I’ve only scratched the surface.
                        <br />
                        <br />
                        Enjoying deep, dark of rock and orchestral music: songs that captivate you within the first ten seconds and maintain that energy for the next ten minutes. <span className="underlines">Deep</span> is a curation of my favorites. Soothed by the inherent energy of drum and bass—<span className="underlines">Drum</span> has my favorites.
                    </p>
                </div>

                <div>
                    <div className="flex gap-3 items-center">
                        <h1 className=" font-bold text-lg">
                            Connect
                        </h1>
                        <div className="underlines mt-0.5 h-0.5 w-full" />
                        <IconBrandReactjs className="animate-spin w-5.5"/>
                    </div>
                    
                    <p className="mt-5">
                        Today our internet is full of noise, internet celebrities drama's, infopreneurs, and less-social.
                        We live with the world at our fingertips, we cling to a pocket-sized portal that promises dreams of escape, but leaves us feeling empty.
                        <br /><br />
                        Reach me with handle <span className="underlines bg-[#2e2e2e]">@yuxxeun</span>  on internet—whether on Instagram, X (formerly Twitter), GitHub, etc.
                    </p>
                </div>
            </div>

        </Container>
	   </>
    );
};

export default Header;
