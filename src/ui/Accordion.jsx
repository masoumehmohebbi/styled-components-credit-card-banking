import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const data = [
  {
    id: 1,
    title: "Accordion One",
    text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
  },
  {
    id: 2,
    title: "Accordion Two",
    text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
  },
  {
    id: 3,
    title: "Accordion Three",
    text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
  },
];

function Accordion() {
  const [open, setOpen] = useState(null); // 1,2,3...

  const handleOpen = (id) => {
    setOpen(id === open ? null : id);
  };

  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          onOpen={handleOpen}
          // setOpen={setOpen}
          open={open}
        >
          {item.text}
        </AccordionItem>
      ))}
      <AccordionItem
        id={4}
        title="Another Accordion"
        onOpen={handleOpen}
        // setOpen={setOpen}
        open={open}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          blanditiis maiores fugit reprehenderit accusamus vitae voluptate
          perferendis labore debitis. Quae tempora cumque laudantium hic
          consequatur natus qui deleniti id commodi?
        </p>
        <ul>
          <li>one</li>
          <li>two</li>
        </ul>
        <a href="#">Dummy Link !</a>
      </AccordionItem>
    </div>
  );
}

export default Accordion;

function AccordionItem({ id, title, setOpen, open, onOpen, children }) {
  const isOpen = id === open;

  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        // onClick={() => setOpen(item.id)}
        onClick={() => onOpen(id)}
      >
        <div>{title}</div>
        <ChevronDownIcon
          className="accordion-item__chevron"
          // style={{
          //   width: "1.2rem",
          //   transition: "all 0.2s ease-out",
          //   rotate: isOpen ? "180deg" : "0deg",
          // }}
        />
      </div>
      <div className="accordion-item__content">{children}</div>
      {/* {isOpen && <div className="accordion-item__content">{item.text}</div>} */}
    </div>
  );
}
