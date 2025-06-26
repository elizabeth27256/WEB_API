import { describe,it,expect }  from 'vitest';
import { sumar, restar } from '../utils/matematicas'


describe('Funciones Matematicas', ()=>{
    it('Debe sumar correctamente', ()=>{
        expect(sumar(2,4)).toBe(6);
    })
    it('Debe Restar correctamente', ()=>{
        expect(restar(2,4)).toBe(2);
    })
})