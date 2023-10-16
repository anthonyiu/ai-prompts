const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-amber-500 via-orange-300 to-yellow-500 z-10 absolute bottom-0">
      <div className="max-w-7xl mx-auto flex-col justify-center items-center py-3 px-3 text-center text-slate-800 text-sm">
        AI Prompts Repository is an app modified by&nbsp;
        <a href="http://anthonyyiu.dev" target="_blank">
          Anthony Yiu
        </a>
        &nbsp;based on&nbsp;
        <a
          href="https://github.com/adrianhajdin/project_next_13_ai_prompt_sharing"
          target="_blank"
        >
          Promptopia
        </a>
      </div>
    </footer>
  );
};
export default Footer;
