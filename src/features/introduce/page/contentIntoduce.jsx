import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import useIntroduce from '../component/hooks/useIntroduce';
ContentIntroduceFeatures.propTypes = {};

function ContentIntroduceFeatures(props) {
  const {
    params: { IntroductionId },
  } = useRouteMatch();

  const { product, Loading } = useIntroduce(IntroductionId);

  return (
    <>
      <div className="content_introduce">
        {Loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            {' '}
            <div className="content_introduce-title">
              <p>{product.name}</p>
            </div>
            <div className="content_introduce-time">
              <p>{product.time}</p>
            </div>
            <div
              className="content_introduce-body"
              dangerouslySetInnerHTML={{ __html: product?.description }}
            ></div>
          </>
        )}
      </div>
    </>
  );
}

export default ContentIntroduceFeatures;
