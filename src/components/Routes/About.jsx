import React from 'react';
import '../../styles/Routes/About.scss';
import MyImage from '../../assets/roie-natan.png';

export default function About() {
    return (
        <div className='about-wrapper'>
            <img className='my-image' src={MyImage} alt='Roie Natan' />
            <p>
                My love of nature long preceded my love of photography. Today I spend as much time as I can in nature hiking and backpacking.
                I enjoy traveling to new and exotic locations, especially remote places.
                I find a deep spirituality in nature and I hope for it to become evident in my photography.
                I put a lot of effort into these images and I hope that my passion for traveling and photographing can translate into
                something special for the viewer.
            </p>

            <p>
                The main idea of Travel Photography is to tell the story and experiences you had through the pictures,
                meaning whenever someone watches a picture he can feel the mood and the atmosphere of the place or the situation.
            I carefully selected the best pictures that describe this concept. Enjoy looking at my images!</p>

            <p>
                I aim to photograph the world in a way that will help others appreciate and care for it.
                I hope to express the deep spirituality that I find in nature and to bring back images to people that
                might not otherwise have an opportunity to witness the beauty.
            </p>
        </div>
    )
}