import WindowControls from "#components/WindowControls";
import { blogPosts } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />

          <div className="search">
            <Search className="icon" />

            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="blog">
        <h2>About Me</h2>
        <p>
          I am <b>Prantik Verma</b>, a <b>developer</b> with a knack for
          creating magic on and off the screen. I am passionate, proactive, and
          creative, actively seeking opportunities in dynamic projects. With an
          insatiable appetite for innovation, I bring a unique blend of vision.
          Also, I am an undergraduate student pursuing my bachelor’s in{" "}
          <b>Computer Science and Engineering</b>. When I’m not thinking in
          languages and frameworks, I’m editing videos, playing the ukulele, or
          finding perspective in the mountains while listening to '80s bolly
          music.
        </p>

        {/* <div className="space-y-8">
          {blogPosts.map(({ id, image, title, date, link }) => {
            <div key={id} className="blog-post">
              <div className="col-span-2">
                <img src={image} alt={title} />
              </div>

              <div className="content">
                <p>{date}</p>
                <h3>{title}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </div>
            </div>;
          })}
        </div> */}
      </div>
    </>
  );
};

const safariWindow = WindowWrapper(Safari, "safari");

export default safariWindow;
