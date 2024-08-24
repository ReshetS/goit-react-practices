import { getPhotos } from 'apiService/photos';
import { Form, PhotosGallery, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  function onSubmit(query) {
    setValue(query);
  }

  useEffect(() => {
    if (!value) return;

    async function getData() {
      try {
        const { photos } = await getPhotos(value, page);
        setPhotos(photos);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [value, page]);

  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form onSubmit={onSubmit} />
      <PhotosGallery photos={photos} />
    </>
  );
};
