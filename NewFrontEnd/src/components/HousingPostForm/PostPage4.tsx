import React from 'react';
import * as z from 'zod';
import {
  largeAmenitiesIcons,
  amenitiesTranslations,
} from '../../assets/icons/all';
import { WizardFormStep } from '../WizardForm';
import ToggleGroup from '../basics/ToggleGroup';

// TODO this should be in a different file
type Amenity = keyof typeof largeAmenitiesIcons;

export const page4Schema = z.object({
  amenities: z.string().array(),
});

export type Page4Store = z.infer<typeof page4Schema>;

export const page4InitialStore: Page4Store = {
  amenities: [],
};

const PostPage4: React.FC<WizardFormStep<Page4Store>> = ({
  amenities,
  setStore,
}) => {
  return (
    <ToggleGroup
      toggleClassName="house-post-amenities-toggle"
      label="Please select all the amenities your place offers."
      content={(Object.keys(largeAmenitiesIcons) as [Amenity]).map((key) => ({
        label: amenitiesTranslations[key],
        icon: largeAmenitiesIcons[key],
      }))}
      initialSelected={amenities}
      onSelect={({ label, selected }) => {
        if (selected) {
          setStore({ amenities: [...amenities, label] });
        } else {
          setStore({
            amenities: amenities.filter((amenity) => amenity !== label),
          });
        }
      }}
      center
    />
  );
};

export default PostPage4 as React.FC;
