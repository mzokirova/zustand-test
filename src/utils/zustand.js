import { create } from "zustand";

import { api } from "./axios";

export const getNews=create((set)=>({
    news:[],
    isLoading:false,
    error:null,

    fetchNews:async()=>{
        set({isLoading:true,error:null});
        try{
            const response=await api.get("/news");
            set({news:response.data,isLoading:false})
        }
        catch(error){
            set({error:error.message, isLoading:false})
        }
    },


    createNews:async(newsItem)=>{
        set({ isLoading: true, error: null });
        try {
          const response = await api.post('/news', newsItem); 
          set((state) => ({
            news: [...state.news, response.data], 
            isLoading: false,
          }));
        } catch (error) {
          set({ error: error.message, isLoading: false });
        }
      },
    
      
      resetNews: () => set({ news: [] }),

      fetchSingleNews: async (id) => {
        const response = await api.get(`/news/${id}`);
        return response.data;
      },
      updateNews: async (id, updatedData) => {
        await api.put(`/news/${id}`, updatedData);
        set((state) => ({
          news: state.news.map((newsItem) => (newsItem._id === id ? { ...newsItem, ...updatedData } : newsItem)),
        }));
      },
      
    deleteNews: async (id) => {
        set({ isLoading: true, error: null });
        try {
          await api.delete(`/news/${id}`);
          set((state) => ({
            news: state.news.filter((item) => item._id !== id),
            isLoading: false,
          }));
        } catch (error) {
          set({ error: error.message, isLoading: false });
        }
      },
    
}))