import React from 'react';

const Imagecard = ({image}) => {
    const tags=image.tags.split(',')
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img style={{height:200}} height="200" src={image.webformatURL} alt="" className="w-full object-cover h-200" />  
    
    <div className=" px-6 py-4">
      <div className="font-bold text-purple-500 text-xl mb-2">
        Photo By {image.user}
      </div>
      <ul>
        <li>
          <strong>
            Views:
          </strong>
          {image.views}
        </li>

        <li>
          <strong>
            Download:
          </strong>
          {image.downloads}
        </li>

        <li>
          <strong>
            Likes:
          </strong>
          {image.likes}
        </li>
      </ul>
      </div>
      <div className="px-6 py-4">
        
        {tags.map((tag,index)=>(
                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
                font-semibold text-gray-700 mr-2
                ">
                    {tag}
                </span>

        ))}
        

      </div>
    </div>
  );
}

export default Imagecard;