function TypingArea({passage}) {
  return (
    <div className="mx-4 mb-28 lg:mx-28 flex justify-center items-center relative mt-8">
      <div className=" w-full">
        <p className=" text-(--neutral-0) blur-sm opacity-40 text-4xl leading-[136%] overflow-hidden max-h-[70vh] tracking-[0.4px]">
          {passage !== ""
            ? passage
            : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur laborum debitis quisquam dolorum quos optio temporibus reiciendisquasi veritatis voluptatum, deleniti voluptatem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, adipisci ipsum architecto nam voluptate iste. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima neque expedita, adipisci sed quo, dolore dolores facilis illo amet voluptates nisi? Fugit id harum ullam rerum, in minus repellat. Inventore reiciendis eaque fugiat quidem ducimus atque, minima reprehenderit eos quia quae nobis qui error delectus aspernatur vel quos voluptatibus Lorem ipsum dolor sit a consectetur adipisicing elit. Culpa tenetur laborum debitis quisquam dolorum quos optio temporibus reiciendis quasi veritatis voluptatum, deleniti voluptatem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, adipisci ipsum architecto nam voluptate iste. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima neque expedita, adipisci sed qdolore dolores facilis illo amet voluptates nisi? Fugit id harum ullam rerum, in minu repellat. Inventore reiciendis eaque fugiat quidem ducimus atque,minima reprehenderit eos quia quae nobis qui delectus aspernaturvel quos voluptatibus Lorem ipsum dolor sit amet consecteturadipisicing elit. Culpa tenetur laborum debitis quisquam dolorum quosvoluptatem, Lorem ipsum dolor sit amet consecadipisicing elit.Voluptatibus, adipisci ipsum architecto nam voluptate iste. Lorem,ipsum dolor sit amet consectetur adipisicing elit. Minima neexpedita, adipisci sed quo, dolore dolores facilisametvoluptates nisi? Fugit id harum ullam rerum, in minus repellat.Inventore reiciendis eaque fugiat quidem ducimus atque, minimareprehenderit eos quia quae nobis qui error delectus aspernatur vel quos voluptatibus"}
        </p>
      </div>
      <div className="absolute w-full gap-5 h-full flex flex-col items-center justify-center top-0 left-0 text-xl font-semibold text-(--neutral-0)">
        <button className="px-6 py-4 rounded-xl bg-(--blue-600) hover:bg-(--blue-400) hover:cursor-pointer focus:outline-1 focus:outline-(--blue-400)">
          Start Typing Test
        </button>
        <p className="">Or click the text and start typing</p>
      </div>
    </div>
  );
}

export default TypingArea;
