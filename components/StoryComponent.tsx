import React,{useState} from 'react'
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
interface StoryComponentProps {
    title: string;
    description: string;
    imageUrl: string;
    videoUrl: string;
  }
const StoryComponent = ({ title, description, imageUrl,videoUrl }:StoryComponentProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    const customStyles = {
 
        content: {
          width: '80%',
          maxWidth: '600px',
          margin: 'auto',
          display: 'flex',
        
        }
      };
      const playerConfig = {
        youtube: {
          playerVars: {
            controls: 1, // 0: oculta los controles, 1: muestra los controles
            modestbranding: 1,
            loop: 1,
          },
        },
      };
  return (
    <div className="max-w-4xl mx-auto p-4 mt-[80px]">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0 relative">
          <img src={imageUrl} alt="Story" className="w-full h-auto rounded-lg" />
          <button
            className="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-full"
            onClick={openModal}
          >
            ▶️
          </button>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl text-black2 font-montserrat font-semibold mb-4">{title}</h2>
          <p className="text-md mb-4 font-montserrat">{description}</p>
        </div>
      </div>
    
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        style={customStyles}
        overlayClassName="overlay"
      >
        <div className="overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
          <div className={`absolute right-0 z-[2] top-[100px]`}>
            <button onClick={closeModal} className="text-3xl rounded-full bg-white hover:bg-white6 w-[50px] h-[50px] cursor-pointer">
              &#x2715;
            </button>
          </div>
          <ReactPlayer url={videoUrl} controls playing config={playerConfig} width="100%" height="100%" />
        </div>
      </Modal>
    </div>
  )
}

export default StoryComponent
