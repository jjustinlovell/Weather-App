import "ldrs/grid";

export default function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <l-grid size="80" color="black" speed="1.5"></l-grid>
    </div>
  );
}
