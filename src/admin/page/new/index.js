import React from 'react';
import PropTypes from 'prop-types';
import InputFied from './../../../component/form-control/InputFeid/index';
import TextField from './../../../component/form-control/textFeild/index';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './styles.scss';
import { async } from '@firebase/util';
import { uid } from '../../../utils';
import axios from 'axios';
import LoadingFileImage from '../../../component/loading/loadingFileImage';
NewFeatures.propTypes = {};

function NewFeatures(props) {
  const [fileImage, setFileImages] = React.useState('');
  const [file, setFile] = React.useState();
  const [LoadingfileImage, setLoadingfileImage] = React.useState(false);
  const { onSubmit, error } = props;
  const [image, setfile] = React.useState('');

  const id = uid();

  console.log(id);
  const schema = yup.object().shape({
    name: yup.string().required('vui lòng nhập tiêu đề'),
    time: yup.string().required('vui lòng nhập   thời gian'),
    description: yup.string().required('vui lòng  nhập mô tả'),
  });
  const form = useForm({
    defaultValues: {
      name: '',
      time: '',
      description: '',
    },
    resolver: yupResolver(schema),
  });
  const handleChangeFiles = (e) => {
    const file = e.target.files;

    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = (e) => {
      setfile(e.target.result);
      localStorage.setItem('fileImage', JSON.stringify(e.target.result));
    };
  };
  const date = new Date();

  const DateAbove = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  const updatefile = JSON.parse(localStorage.getItem('fileImage'));
  //SET IMAGE ARRAY
  const handleChangeImageUrlFile = async (e) => {
    setLoadingfileImage(true);
    const file = e.target.files[0];

    const data = new FormData();

    data.append('file', file);
    data.append('upload_preset', 'upload');

    try {
      const uploadRe = await axios.post(
        'https://api.cloudinary.com/v1_1/huukien/image/upload',
        data
      );
      console.log(data);
      console.log(uploadRe.data);

      const { url } = uploadRe.data;

      console.log('url', url);
      setFileImages(url);
      setLoadingfileImage(false);
    } catch (error) {}
  };
  const handleSubmit = async (value) => {
    await console.log({ ...value, time: DateAbove, image, id });

    localStorage.removeItem('fileImage');
    setfile('');
    form.reset();
  };
  console.log('file', image);

  console.log(updatefile);

  return (
    <div className="new">
      <div className="new_swapper">
        <div className="new_title">
          <span>New</span>
        </div>

        <div className="new_body">
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="new_group">
              <label>
                Id <strong>*</strong>
              </label>
              <span>{id}</span>
            </div>
            <div className="new_group">
              <label>
                Ngày&giờ <strong>*</strong>
              </label>
              <span>{DateAbove}</span>
            </div>
            <div className="new_group">
              <label>
                Title <strong>*</strong>
              </label>
              <InputFied form={form} name="name" label="Title" />
            </div>
            <div className="new_group">
              <label>
                ảnh mô tả: <strong>*</strong>{' '}
              </label>
              <input
                type="file"
                id="file"
                onChange={handleChangeImageUrlFile}
                style={{ display: 'none' }}
              />
              {fileImage === '' && (
                <label htmlFor="file">
                  <span>Upload file</span>
                </label>
              )}
              {LoadingfileImage ? (
                <LoadingFileImage />
              ) : (
                <>
                  {' '}
                  {fileImage !== '' && (
                    <>
                      <img src={fileImage} alt="" />{' '}
                    </>
                  )}
                </>
              )}
            </div>

            <div className="new_group">
              <label>
                Mô tả <strong>*</strong>
              </label>
              <TextField
                control={form.control}
                name="description"
                label="Mô tả"
                placeholder="Nội dung ..."
              />
            </div>
            <div className="new_btn">
              <button type="submit">Creater</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewFeatures;
