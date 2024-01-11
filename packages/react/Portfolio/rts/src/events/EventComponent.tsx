const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const ondragstart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("Im being dragged!", event);
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={ondragstart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
