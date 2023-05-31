import { Link } from 'react-router-dom';
import logo1 from '../../assets/exciting tools/image 318 (1).png'
import logo2 from '../../assets/exciting tools/image 319.png'
import logo3 from '../../assets/exciting tools/image 320.png'
import logo4 from '../../assets/exciting tools/image 321.png'
import ExcitingToolsCard from './ExcitingToolsCard';


const ExcitingTools = () => {
    const toolsData = [
        {
            id: 1,
            title: 'Blog Headlines',
            icon: logo1,
            discription: 'Write a better blog title with our A.I tool.',

        },
        {
            id: 2,
            title: 'Blog Intros',
            icon: logo2,
            discription: 'Generate a paragraph of blog content using Blog Intros tool',

        },
        {
            id: 3,
            title: 'Blog Outline',
            icon: logo3,
            discription: 'Need an attention-grabbing headline for your article?',

        },
        {
            id: 4,
            title: 'Blog Conclusions',
            icon: logo4,
            discription: 'Write a better conclusions with AI writing tool.',

        },
        {
            id: 5,
            title: 'Content Rewriter',
            icon: logo4,
            discription: 'Get AI writer to rewrite your sentence in a different way.',

        },
        {
            id: 6,
            title: 'Product Description',
            icon: logo4,
            discription: 'Need an attention-grabbing headline for your article?',

        },
        {
            id: 7,
            title: 'PAS Copywriting Formula',
            icon: logo4,
            discription: 'Get AI writer to rewrite your sentence in a different way.',

        },
        {
            id: 8,
            title: 'Company About Us',
            icon: logo4,
            discription: 'Write a better conclusions with AI writing tool.',

        },
    ]
    return (
        <div className='container mx-auto mt-20'>
            <h1 className='text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center'>54 exciting writing tools</h1>
            <p className=' text-accent text-xl text-center p-4'>AI engines take information from various sources and read them like a human would do.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5'
            
            >
                {
                    toolsData.map(toolData => <ExcitingToolsCard
                        key={toolData.id}
                        toolData={toolData}
                    ></ExcitingToolsCard>)
                }
            </div>
            <p className='text-xl text-center text-white font-semibold mt-16'><Link className=' '>See all 54 available tools</Link></p>
            
        </div>
    );
};

export default ExcitingTools;