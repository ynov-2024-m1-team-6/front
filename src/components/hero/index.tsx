import Link from "../../../node_modules/next/link"

interface Props{
    img:string,
    title: string,
    description: string,
    link:string,
    link_text: string
}

const Index = ({img, title, description, link, link_text}: Props) => {
  return (
    <div className="relative h-screen bg-no-repeat bg-cover"
    style={
      {
        backgroundImage:`linear-gradient(#0000001f, #00000012, #0000001a), url(${img})`
      }
    }
    >
      <div className="h-screen bg-black bg-opacity-30 flex flex-col items-center text-center">
        <div className="w-2/3 top-10 absolute">
          <h1 className="font-display text-white text-6xl mt-6 mb-6 bg-dark-200">{title}</h1>
          <p className="text-white text-lg mb-8 mt-4">{description}</p>
          
        </div>
        <Link 
            className="bg-white text-gray-900 px-4 py-3 border border-white hover:bg-transparent absolute top-3/4 w-1/4 mx-auto text-center
            hover:text-white hover:border-color-transparent transition ease-in-out delay-150 rounded-2xl" 
            href={link}>
            {link_text}
          </Link>
      </div>
    </div>
  );
}

export default Index;
