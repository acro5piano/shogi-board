import * as React from 'react'
import styled from 'styled-components'

const PieceComponent = styled.div`
  border: solid 1px #ccc;
  width: 20px;
`

interface PieceProps {
  name?: string
}

export default function Piece({ name }: PieceProps) {
  return <PieceComponent>{name || ' '}</PieceComponent>
}
