import React, { useEffect, useState } from "react"
import ReactFancyVitrine, { ImageType } from "react-fancy-vitrine";
import { IoLogoGithub, IoLogoNpm } from 'react-icons/io5'
import {
  Flex,
  Box,
  Select,
  Text,
  FormControl,
  FormLabel,
  HStack,
  Button
} from "@chakra-ui/react"

import {
  containerWidth,
  effect,
  theme,
  timingEffect,
  hasButtons,
  buttonPosition,
  borderColorSelected,
  buttonBgColorDefault,
  buttonBgColorHover
} from './valuesChange'

export default function App() {
  const initialStateControls = {
    containerWidth: '700px',
    effect: 'default',
    theme: 'default',
    timingEffect: '300',
    hasButtons: true,
    borderColorSelected: '#f4442e',
    buttonPosition: 'default',
    buttonBgColor: {
      default: '#f1f1f1',
      hover: '#ddd'
    }
  }

  const [images, setImages] = useState<ImageType[]>();
  const [controls, updateControls] = useState(initialStateControls)

  useEffect(() => {
    setImages(
      Array.from(Array(10).keys()).map((id) => ({
        id,
        url: `https://picsum.photos/1000?random=${id}`
      }))
    );
  }, []);

  const handleChangeOption = (control: string, value: string) => {
    updateControls({
      ...controls,
      [control]: value === 'true' ? true : value === 'false' ? false : value
    })
  }

  const handleObject = (control: string, value: string) => {
    const objectValue = control.split('.')
    const newValue = {
      ...controls[objectValue[0]],
      [objectValue[1]]: value
    }

    updateControls({
      ...controls,
      [objectValue[0]]: newValue
    })
  }

  return (
    <Box w='100%' className='App'>
      <Box
        w='1280px'
        marginLeft='auto'
        marginRight='auto'
        alignItems='center'
      >
        <Flex w='100%' justifyContent='flex-end' marginTop='20px' marginBottom='-40px'>
          <HStack>
            <Button
              variant="outline"
              size="sm"
              color="#222222"
              leftIcon={<IoLogoGithub size={18} />}
              onClick={() => {
                window.open('https://github.com/leoncarey/react-fancy-vitrine', '_blank')
              }}
            >
              view source
            </Button>

            <Button
              variant="outline"
              size="sm"
              leftIcon={<IoLogoNpm color="#E53E3E" size={24} />}
              onClick={() => {
                window.open('https://www.npmjs.com/package/react-fancy-vitrine', '_blank')
              }}
            >
              react-fancy-vitrine
            </Button>
          </HStack>
        </Flex>

        <Box
          marginLeft='auto'
          marginRight='auto'
          marginTop='0'
          marginBottom='60px'
          textAlign='center'>
          <Text fontSize="5xl">
            React Fancy Vitrine
          </Text>

          <Text color="gray.500" isTruncated>
            Select your favorite config to React Fancy Vitrine and enjoy in our playground.
          </Text>
        </Box>

        <Flex w='100%'>
          <Box w='70%'>
            <ReactFancyVitrine
              images={images}
              containerWidth={controls.containerWidth}
              effect={controls.effect}
              theme={controls.theme}
              timingEffect={controls.timingEffect}
              hasButtons={controls.hasButtons}
              buttonPosition={controls.buttonPosition}
              borderColorSelected={controls.borderColorSelected}
              buttonBgColor={{
                default: controls.buttonBgColor.default,
                hover: controls.buttonBgColor.hover
              }}
            />
          </Box>

          <Box w='30%'>
            <FormControl marginBottom='15'>
              <FormLabel>Theme:</FormLabel>

              <Select
                size="sm"
                defaultValue={controls.theme}
                placeholder="Select theme"
                onChange={({ target: { value } }) => {
                  handleChangeOption('theme', value)
                }}>
                {theme.map((value, id) => (
                  <option value={value} key={id}>{value}</option>
                ))}
              </Select>
            </FormControl>

            <FormControl marginBottom='15'>
              <FormLabel>Container width:</FormLabel>

              <Select
                size="sm"
                defaultValue={controls.containerWidth}
                placeholder="Select width"
                onChange={({ target: { value } }) => {
                  handleChangeOption('containerWidth', value)
                }}>
                {containerWidth.map((value, id) => (
                  <option value={value} key={id}>{value}</option>
                ))}
              </Select>
            </FormControl>

            <FormControl marginBottom='15'>
              <FormLabel>Effect:</FormLabel>

              <Select
                size="sm"
                defaultValue={controls.effect}
                placeholder="Select effect"
                onChange={({ target: { value } }) => {
                  handleChangeOption('effect', value)
                }}>
                {effect.map((value, id) => (
                  <option value={value} key={id}>{value}</option>
                ))}
              </Select>
            </FormControl>

            <FormControl marginBottom='15'>
              <FormLabel>Timing Effect:</FormLabel>

              <Select
                size="sm"
                defaultValue={controls.timingEffect}
                placeholder="Select timing effect"
                onChange={({ target: { value } }) => {
                  handleChangeOption('timingEffect', value)
                }}>
                {timingEffect.map((value, id) => (
                  <option value={value} key={id}>{value}</option>
                ))}
              </Select>
            </FormControl>

            <FormControl marginBottom='15'>
              <FormLabel>Has Button:</FormLabel>

              <Select
                size="sm"
                defaultValue={controls.hasButtons.toString()}
                placeholder="Select has button"
                onChange={({ target: { value } }) => {
                  handleChangeOption('hasButtons', value)
                }}>
                {hasButtons.map((value, id) => (
                  <option value={value.toString()} key={id}>{value.toString()}</option>
                ))}
              </Select>
            </FormControl>

            <FormControl marginBottom='15'>
              <FormLabel>Button position:</FormLabel>

              <Select
                size="sm"
                defaultValue={controls.buttonPosition}
                placeholder="Select button position"
                onChange={({ target: { value } }) => {
                  handleChangeOption('buttonPosition', value)
                }}>
                {buttonPosition.map((value, id) => (
                  <option value={value} key={id}>{value}</option>
                ))}
              </Select>
            </FormControl>

            <FormControl marginBottom='15'>
              <FormLabel>Border color for thumb:</FormLabel>

              <Select
                size="sm"
                defaultValue={controls.borderColorSelected}
                placeholder="Select border color"
                onChange={({ target: { value } }) => {
                  handleChangeOption('borderColorSelected', value)
                }}>
                {borderColorSelected.map((value, id) => (
                  <option value={value} key={id}>{value}</option>
                ))}
              </Select>
            </FormControl>

            <FormControl marginBottom='15'>
              <FormLabel>Button color:</FormLabel>

              <Select
                size="sm"
                defaultValue={controls.buttonBgColor.default}
                placeholder="Select button color"
                onChange={({ target: { value } }) => {
                  handleObject('buttonBgColor.default', value)
                }}>
                {buttonBgColorDefault.map((value, id) => (
                  <option value={value} key={id}>{value}</option>
                ))}
              </Select>
            </FormControl>

            <FormControl marginBottom='15'>
              <FormLabel>Button color(Hovered):</FormLabel>

              <Select
                size="sm"
                defaultValue={controls.buttonBgColor.hover}
                placeholder="Select button color"
                onChange={({ target: { value } }) => {
                  handleObject('buttonBgColor.hover', value)
                }}>
                {buttonBgColorHover.map((value, id) => (
                  <option value={value} key={id}>{value}</option>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
